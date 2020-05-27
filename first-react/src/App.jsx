import './App.css'
import React from 'react'

import First from './components/basics/First'
import WithProps from './components/basics/WithProps'
import WithChildren from './components/basics/WithChildren'
import Card from './components/layout/Card'
import Repetitions from './components/basics/Repetitions'
import Condition from './components/basics/Condition'
import ConditionWithIf from './components/basics/ConditionWithIf'
export default props =>
	<div className="App">
		<Card title="ConditionWithIf">
			<ConditionWithIf number={11}></ConditionWithIf>
		</Card>
		<Card title="Condition">
			<Condition number={10}></Condition>
		</Card>
		<Card title="Component With Children">
			<Repetitions/>
		</Card>
		<Card title="Component With Children">
			<WithChildren>
				<ul>
					<li>Ana</li>
					<li>Bia</li>
					<li>Carlos</li>
					<li>Rodrigo</li>
				</ul>
			</WithChildren>
		</Card>
		<Card title="Component With Properties">
			<WithProps title="This is the title" subtitle="This is the subtitle"/>
		</Card>
		<Card title="First Component">
			<First/>
		</Card>
		
	</div>

