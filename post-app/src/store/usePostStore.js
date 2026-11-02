/**
 * 게시글 전역 store  ---> Zustand
 *
 * [정의 순서]
 * 1. 화면에서 공유해야 할 "상태"를 정한다.
 * 2. 상태를 바꾸는 "액션"을 정한다.
 *
 * [필요한 상태]
 * - posts   : 게시글 목록 배열. 목록/수정 페이지가 함께 사용한다. (초기값 [])
 * - loading : 목록 조회 중인지 여부. 로딩 표시용. (초기값 false)
 * - error   : 조회 실패 시 에러 메시지. 에러 표시용. (초기값 null)
 *
 * [필요한 액션]
 * - fetchPosts : 목록 조회 (READ)   → posts 교체, loading/error 갱신
 * - addPost    : 게시글 추가 (CREATE) → posts 맨 앞에 추가
 * - editPost   : 게시글 수정 (UPDATE) → id가 일치하는 항목만 교체
 * - removePost : 게시글 삭제 (DELETE) → id가 일치하는 항목 제거
 *
 * set 사용법
 * - set({ ... })        : 객체를 주면 해당 필드만 병합 갱신
 * - set((s) => ({ ... })) : 이전 상태(s)를 기반으로 갱신할 때 함수 형태 사용
 */

import { create } from 'zustand'
import * as postApi from '../api/postApi'

export const usePostStore = create( (set) => {
    return (
        {
            posts: [],
            loading: false,
            error: null,
        
            fetchPosts: async (data) => {
                // 목록 조회: posts 교체, loading/error 갱신

                set( {loading: true, error: null} )
                try {
                    const posts = await postApi.fetchPosts()
                    set( {posts, loading: false })
                } catch (e) {
                    set( {error: e.message, loading: false } )
                }
            },

            addPost: async (data) => {
                // 게시글 추가
                const created = await postApi.addPost(data)
                
                // 아래는 썜 코드 (Diff: 예외처리 없음)
                // set((s) => ({ posts: [{...created, id: Date.now()}, ...s.posts]}))

                try {
                    // 이전 상태(s)를 전달 받기 위해 함수 형태로 정의
                    set( (s) => ( {posts: [{...created, id: Date.now()}, ...s.posts]} ) )
                } catch (e) {
                    set( {error: e.message, loading: false })
                }
            },

            editPost: async (id, data) => {
                // 게시글 수정
                const updated = await postApi.updatePost(id, data)

                set( (s) => ({
                    posts: s.posts.map( (p) => p.id === id ? updated : p )
                }) )
            },

            removePost: async (id) => {
                // 게시글 삭제 TODO
                const deleted = await postApi.removePost(id)
                
                set( (state) => ({
                    posts: state.posts.filter( (post) => post.id !== id )
                }) )
            }
        }
    )
            
} )
