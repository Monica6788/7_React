import styled from 'styled-components'

import { Link, Outlet } from 'react-router-dom'


const Header = styled.header`
  display: flex;
  gap: 20px;
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  font-weight: 600;
`
const Main = styled.main`
  max-width: 720px;
  margin: 24px auto;
  padding: 0 16px;
`

function Layout() {
    return (
        <>
            <Header>
                <Link to="/">Home</Link>
                <Link to="/posts">Post</Link>
                <Link to="/posts/new">New Posts</Link>
            </Header>

            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export default Layout