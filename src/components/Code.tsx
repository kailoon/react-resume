type Props = {
	data: {
		title: string
		skills: {
			items: string[]
		}
	}[]
}
const Code = ({ data }: Props) => {
	return (
		<div>
			{data.map((item) => (
				<div key={item.title}>
					<strong>{item.title}</strong>
					<ul>
						{item.skills && (
							<>
								{item.skills.items.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</>
						)}
					</ul>
				</div>
			))}
		</div>
	)
}

export default Code
