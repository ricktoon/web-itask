import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import api from '../../services/api';
import {format} from 'date-fns';

import * as S from './styles';



import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

function Task({match}) {

  const [redirect, setRedirect] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('00:11:22:33:44:55');



  async function lateVerify(){
    await api.get(`/task/filter/late/00:11:22:33:44:55`)
    .then(response => {
    setLateCount(response.data.length)
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response=>{
      setType(response.data.type)
      setTitle(response.data.title)
      setDone(response.data.done)
      setDescription(response.data.description)
      setDate(format (new Date (response.data.when),'yyyy-MM-dd'))
      setHour(format (new Date (response.data.when),'HH:mm'))
    })
  }

  async function Save(){
    //Validation information

    if(!title)
    return alert("Você precisa informar o título da tarefa")
    else if(!description)
    return alert("Você precisa informar a descrição da tarefa")
    else if(!type)
    return alert("Você precisa selecionar o tipo da tarefa")
    else if(!date)
    return alert("Você precisa definir a data da tarefa")
    else if(!hour)
    return alert("Você precisa definir a hora da tarefa")

    if(match.params.id){
      await api.put(`/task/${match.params.id}`,{
        macaddress,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(()=>
        setRedirect(true)
      )
    }else{
    await api.post('/task',{
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(()=>
      setRedirect(true)
    )
  }
  }

  async function Remove(){
   
    const res = window.confirm('Deseja realmente remover a tarefa?')
      if(res == true){
        await api.delete(`/task/${match.params.id}`)
        .then(()=> setRedirect(true))
       
      }else{
        alert('tudo bem, vamos manter')
      }

  }

  useEffect(()=>{
    lateVerify();
    LoadTaskDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <S.Container>
      {redirect && <Redirect to="/"/>}
      <Header  lateCount={lateCount} />
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={()=> setType(index)}>
              <img src={icon} alt="Tipo da Tarefa"
              className={type && type != index && 'inative'}
              />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa..." 
          onChange={e => setTitle(e.target.value)} value={title} />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da tarefa."
           onChange={e => setDescription(e.target.value)} value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da tarefa..."
           onChange={e => setDate(e.target.value)} value={date}
          />
          <img src={iconCalendar} alt="Calendario"/>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da tarefa..."
           onChange={e => setHour(e.target.value)} value={hour}
          />
          <img src={iconClock} alt="Relogio"/>
        </S.Input>

        <S.Options>
          <S.CheckBox>
            <input type="checkbox" checked={done} onChange={()=>setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </S.CheckBox>
      { match.params.id && <button type="button" onClick={Remove}>Excluir</button>}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>
      </S.Form>
      <Footer/>
    </S.Container>
  );
}

export default Task;