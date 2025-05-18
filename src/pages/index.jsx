import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { WorkshopIntro } from '../components/WorkshopIntro';
import { Instructor } from '../components/Instructor';
import { Venue } from '../components/Venue';

const response = await fetch('http://localhost:4000/api/workshops/0');
const workshopInfo = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro workshopInfo={workshopInfo}/>
    <Instructor workshopInfo={workshopInfo}/>
    <Venue workshopInfo={workshopInfo}/>
  </div>
);
