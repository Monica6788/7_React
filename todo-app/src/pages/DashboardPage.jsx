import styled from 'styled-components'
import { Link } from "react-router-dom"

import { Card, PageTitle } from "../styles/common"

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4f6ef7;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

const CategoryCard = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
  }
`

function DashboardPage() {
    return (
        <>
            <PageTitle>DashBoard</PageTitle>

            <Stats>
                <Card>
                    <div>ALL</div>
                    <StatNumber>0</StatNumber>
                </Card>
                <Card>
                    <div>DONE</div>
                    <StatNumber>0</StatNumber>
                </Card>
                <Card>
                    <div>NOT-DONE</div>
                    <StatNumber>0</StatNumber>
                </Card>
            </Stats>

            <SectionTitle>카테고리별</SectionTitle>
            <CategoryGrid>

            </CategoryGrid>

            <SectionTitle>최근 할 일</SectionTitle>
            {/* TODO: 할일 목록 표시 */}
        </>
    )
}

export default DashboardPage