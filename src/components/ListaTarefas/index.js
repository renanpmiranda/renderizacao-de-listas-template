import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [lista, setLista] = useState([
    "Lavar a louça",
    "Consertar a bike",
    "Passar no mercado",
  ])
 
  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => tarefa !== item)
    setLista(listaFiltrada)    
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
              <p>{tarefa}</p>
              <RemoveButton onClick={() => removeTarefa(tarefa)}>
                <img src={bin} alt="bin" width="16px" />
              </RemoveButton>
              </Tarefa>
            )
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
