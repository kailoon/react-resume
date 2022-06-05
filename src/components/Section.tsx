import Card from './Card'
import styles from './Section.module.scss'

interface Props {
	title: string
	icon: React.ReactElement
	typeOn?: boolean
	data: {
		title?: string
		job?: string
		company?: string
		type?: string
		date?: string
		description?: string
		tasks?: {
			accomplishments?: string[]
		}
		skillsTools?: {
			items?: string[]
		}
	}[]
}

const Section = ({ title, data, icon, typeOn = true }: Props) => {
	return (
		<section>
			<div className={styles.title}>
				{icon}
				<h2>{title}</h2>
			</div>
			{data.map((item) => (
				<Card key={item.title}>
					<div className={styles.leftpanel}>
						{typeOn && (
							<p
								className={`${styles.type} ${
									item.type &&
									styles[item.type.replace(/\s/g, '').toLowerCase()]
								}`}
							>
								{item.type}
							</p>
						)}
						<p className={styles.date}>{item.date}</p>
						{item.job && (
							<p className={styles.job}>
								<span>As </span>
								{item.job}
							</p>
						)}
					</div>
					<div className={styles.rightpanel}>
						<h3>{item.title}</h3>
						<p>
							<small>{item.company}</small>
						</p>
						<p>{item.description}</p>
						<ul>
							{item.tasks?.accomplishments &&
								item.tasks.accomplishments.map((task) => (
									<li key={task}>{task}</li>
								))}
						</ul>
						{item.skillsTools && (
							<>
								<strong>Tools / Skills / Software:</strong>
								<ul className={styles.skills}>
									{item.skillsTools.items &&
										item.skillsTools.items.map((skill) => (
											<li key={skill}>{skill}</li>
										))}
								</ul>
							</>
						)}
					</div>
				</Card>
			))}
		</section>
	)
}

export default Section
