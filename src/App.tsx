import Header from './components/Header'
import styles from './App.module.scss'
import Section from './components/Section'
import {
	BriefcaseIcon,
	PresentationChartBarIcon
} from '@heroicons/react/outline'
import Grid from './components/Grid'
import { useEffect } from 'react'

import skills from './data/skills.json'
import code from './data/code.json'
import experiences from './data/experiences.json'
import projects from './data/projects.json'
import languages from './data/languages.json'
import certs from './data/certificates.json'
import Gallery from './components/Gallery'
import bio from './data/bio.json'

const App = () => {
	useEffect(() => {
		document.title = `${bio.name} - ${bio.title}`
	}, [])

	return (
		<div className={styles.container}>
			<Header data={bio} />
			<hr />
			<Section
				title="Working Experiences"
				data={experiences}
				icon={<BriefcaseIcon />}
			/>
			<hr />
			<Section
				title="Freelance Projects"
				data={projects}
				icon={<PresentationChartBarIcon />}
				typeOn={false}
			/>
			<hr />
			<Gallery data={certs} title="Certifications" />
			<hr />

			<Grid data={skills} />
			<hr />
			<Grid data={code} />
			<hr />
			<Grid data={languages} />
		</div>
	)
}

export default App
