import { Link } from "react-router-dom"
import { Card, EmptyText, PageTitle } from "../styles/common"

function NotFoundPage() {
    return (
        <>
            <PageTitle>404</PageTitle>
            <Card>
                <EmptyText>Page Not Found</EmptyText>
                <Link to="/">Back to DashBoard</Link>
            </Card>
        </>
    )
}

export default NotFoundPage