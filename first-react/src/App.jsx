import './App.css'
import React from 'react'

import First from './components/basics/First'
import WithProps from './components/basics/WithProps'
import WithChildren from './components/basics/WithChildren'
import Card from './components/layout/Card'
import Repetitions from './components/basics/Repetitions'
import Condition from './components/basics/Condition'
import ConditionWithIf from './components/basics/ConditionWithIf'
import Parent from './components/comunication/direct/Parent'
import Super from './components/comunication/indirect/Super'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Mega from './components/megaSena/Mega'

export default props =>
	<div className="App">
		<h1>React Fundalmentals</h1>
		<div className="Cards">
			<Card title="Lotery" color="#73503C" >
				<Mega qtyOfNumbers={8}></Mega>
			</Card>
			<Card title="Counter" color="#293E6A" >
				<Counter increment={10}/>
			</Card>
			<Card title="Input" color="#9C0F5F">
				<Input/>
			</Card>
			<Card title="Indirect Comunication" color="#000">
				<Super/>	
			</Card>
			<Card title="Direct Comunication" color="#4298B5">
				<Parent/>	
			</Card>
			<Card title="Condition With If" color="#FA6900">
				<ConditionWithIf number={11}></ConditionWithIf>
			</Card>
			<Card title="Condition" color="#E94C6F">
				<Condition number={10}></Condition>
			</Card>
			<Card title="Component With Children" color="#008BBA">
				<Repetitions/>
			</Card>
			<Card title="Component With Children" color="#D96469">
				<WithChildren>
					<ul>
						<li>Ana</li>
						<li>Bia</li>
						<li>Carlos</li>
						<li>Rodrigo</li>
					</ul>
				</WithChildren>
			</Card>
			<Card title="Component With Properties" color="#FF85CB">
				<WithProps title="This is the title" subtitle="This is the subtitle"/>
			</Card>
			<Card title="First Component" color="#92B06A">
				<First/>
			</Card>
		</div>
	
		
		
	</div>

