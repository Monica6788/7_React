import styled from 'styled-components'

export const PageTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 24px;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`

export const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background: ${({ $variant }) =>
    $variant === 'danger' ? '#e5484d' : $variant === 'ghost' ? '#8b93a1' : '#4f6ef7'};

  &:hover {
    opacity: 0.9;
  }
`

export const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  background: #e8ecff;
  color: #4f6ef7;
`

export const EmptyText = styled.p`
  color: #8b93a1;
  text-align: center;
  padding: 24px 0;
`