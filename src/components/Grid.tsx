import styles from './Grid.module.scss'

type Props = {
	data: {
		title?: string
		level?: string
		skills?: {
			items: string[]
		}
	}[]
}

const Grid = ({ data }: Props) => {
	return (
		<section className={styles.section}>
			<div>
				{data.map((item) => (
					<div key={item.title}>
						<strong>{item.title}</strong>
						{item.skills && (
							<ul>
								{item.skills && (
									<>
										{item.skills.items.map((skill) => (
											<li key={skill}>{skill}</li>
										))}
									</>
								)}
							</ul>
						)}
						{item.level && <p>{item.level}</p>}
					</div>
				))}
			</div>
		</section>
	)
}

export default Grid
