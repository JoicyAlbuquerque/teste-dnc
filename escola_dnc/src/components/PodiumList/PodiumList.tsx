import {
    Card,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
  } from "@mui/material";
import { AvatarPodium, BoxRow } from "./styles";
import { Aluno } from "../../types";

  
  function PodiumList(alunos : Aluno[]) {
    return (
      <Card>
        <List
          subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                  PÓDIO GERAL
              </ListSubheader>
          }
        >
          <BoxRow>
          {alunos.alunos.map((aluno, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <AvatarPodium>{aluno.posicaoRankingGeral}</AvatarPodium>
            </ListItemAvatar>
            <ListItemText
              primary={`${aluno.idAluno.email} - ${aluno.pontuacaoTotal} pontos`}
              secondary={aluno.idEscola.nome}
            />
          </ListItem>
          ))}
          </BoxRow>
        </List>
      </Card>
    );
  }
  
  export default PodiumList;
  