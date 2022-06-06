import {
	AcademicCapIcon,
	CalendarIcon,
	GlobeAltIcon
} from '@heroicons/react/outline'
import styles from './Gallery.module.scss'
import Heading from './Heading'

type Props = {
	title: string
	data: {
		name: string
		from: string
		date: string
		certUrl: string
	}[]
}

const Gallery = ({ data, title }: Props) => {
	return (
		<section className={styles.section}>
			<Heading title="Certifications" icon={<AcademicCapIcon />} />
			<div className={styles.gallery}>
				{data.map((item, index) => (
					<div key={index} className={styles.container}>
						<div>
							<h3>{item.name}</h3>
							<p className={styles.meta}>
								<span>
									<GlobeAltIcon />
									{item.from}
								</span>
								<span>
									<CalendarIcon />
									{item.date}
								</span>
							</p>
						</div>
						<a href={item.certUrl} target="_blank" title="open in new tab">
							Credential
						</a>
					</div>
				))}
			</div>
		</section>
	)
}

export default Gallery
