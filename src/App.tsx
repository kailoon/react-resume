import Header from './components/Header'
import styles from './App.module.scss'
import Section from './components/Section'
import {
	BriefcaseIcon,
	PresentationChartBarIcon
} from '@heroicons/react/outline'
import Code from './components/Code'
import Grid from './components/Grid'

import skills from './data/skills.json'
import code from './data/code.json'
import experiences from './data/experiences.json'
import projects from './data/projects.json'
import languages from './data/languages.json'

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
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

			<Grid data={skills} />
			<hr />
			<Grid data={code} />
			<hr />
			<Grid data={languages} />
		</div>
	)
}

export default App
