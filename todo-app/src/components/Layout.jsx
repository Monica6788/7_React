import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { CATEGORIES } from '../constants'

// html 태그는 styled.태그명 형태로 작성
const Header = styled.header`
    background: #fff;
    border-bottom: 1px solid #e3e7ee;
`

const Nav = styled.nav`
    max-width: 800px;
    margin: 0 auto;
    padding: 14px 20px;
    display: flex;
    align-item: center;
    gap: 16px;
    flex-wrap: wrap;
`

const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 20px 60px;
`
// 컴포넌트는 styled(컴포넌트명)
// &. : 현재 선택된 속성
const StyledNavLink = styled(NavLink)`
    color: #6b7280;
    padding: 4px 2px

    &.active {
        color: #4f6ef7;
        font-weight: 600;
        border-bottom: 2px solid #4f6ef7;
    }
`

function Layout() {
    return (
        <>
            <Header>
                <Nav>
                    <StyledNavLink to="/" end>DashBoard</StyledNavLink>
                    <StyledNavLink to="/todos" end>TodoList</StyledNavLink>
                    {
                        Object.entries(CATEGORIES).map( ([key, {label}]) => {
                            return (
                                <StyledNavLink key={key} to={`/category/${key}`}>
                                    {label}
                                </StyledNavLink>
                            )
                        })
                    }
                </Nav>
            </Header>
            
            <Main>
                {/* <Outlet />: 자식 컴포넌트들이 레이아웃에 맞게 정렬된다.
                                (주소에 맞게 자식 <Route>들이 표시된다.) */}
                <Outlet />
            </Main>
        </>
    )
}

export default Layout