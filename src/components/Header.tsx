import Card from './Card'
import bio from '../data/bio.json'
import styles from './Header.module.scss'
import {
	CalendarIcon,
	LocationMarkerIcon,
	MailIcon,
	PhoneIcon
} from '@heroicons/react/outline'

const Header = () => {
	return (
		<Card>
			<div>
				<figure className={styles.figure}>
					<img src={bio.avatar} alt={bio.name} />
				</figure>
			</div>
			<div className={styles.bio}>
				<header>
					<div>
						<h1>{bio.name}</h1>
						<p className={styles.job}>{bio.jobTitle}</p>
					</div>
					<div>
						<a href={bio.website} target="_blank">
							{bio.website}
						</a>
					</div>
				</header>

				<p className={styles.meta}>
					<span>
						<CalendarIcon />
						{bio.dob}
					</span>
					<span>
						<LocationMarkerIcon />
						{bio.location}
					</span>
					<a href={`tel:${bio.phone}`}>
						<PhoneIcon />
						{bio.phone}
					</a>
					<a href={`mailto:${bio.email}`}>
						<MailIcon />
						{bio.email}
					</a>
				</p>

				<hr />
				<p className={styles.about}>{bio.about}</p>
			</div>
		</Card>
	)
}

export default Header
