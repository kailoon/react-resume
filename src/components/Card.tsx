import styles from './Card.module.scss'

type Props = {
	children: React.ReactNode
}

const Card = ({ children }: Props) => {
	return <div className={styles.card}>{children}</div>
}
export default Card
