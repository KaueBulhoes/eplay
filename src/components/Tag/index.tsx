import { TagContainter } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainter size={size}>{children}</TagContainter>
)

export default Tag
