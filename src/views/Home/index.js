import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/00:11:22:33:44:55`)
    .then(response => {
    setTasks(response.data)
    })
  }

  useEffect(()=>{
    loadTasks();
  },[filterActived, loadTasks])

  return (
  <S.Container>
  <Header/>
      <S.FilterArea>
          <button type="button" onClick={()=> setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
          </button>
          <button type="button" onClick={()=> setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === 'today'} />
          </button>
          <button type="button" onClick={()=> setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === 'week'} />
          </button>
          <button type="button" onClick={()=> setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'} />
          </button>
          <button type="button" onClick={()=> setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === 'year'} />
          </button>       
         
       </S.FilterArea>
       <S.Title>
            <h3>TAREFAS</h3>
          </S.Title>

          <S.Content>
            {
              tasks.map( t => (
              <TaskCard type={t.type} title={t.title} when={t.when}/>
              ))
            }           
          </S.Content>
  <Footer/>
  </S.Container>
  )
}

export default Home;
