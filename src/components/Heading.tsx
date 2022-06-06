import styles from './Heading.module.scss'

type Props = {
	icon?: React.ReactElement
	title: string
}

const Heading = ({ icon, title }: Props) => {
	return (
		<div className={styles.title}>
			{icon}
			<h2>{title}</h2>
		</div>
	)
}

export default Heading
