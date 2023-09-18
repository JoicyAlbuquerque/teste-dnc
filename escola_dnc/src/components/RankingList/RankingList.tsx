import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { AvatarRanking } from "./styles";

function RankingList(ranking) {
  return (
    <Card>
      <List
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                {ranking.ranking[0].idEscola.nome}
            </ListSubheader>
        }
      >
        {ranking.ranking.map((aluno, index) => ( 
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <AvatarRanking>{aluno.posicaoRankingEscola}</AvatarRanking>
          </ListItemAvatar>
          <ListItemText
            primary={`${aluno.idAluno.email} - ${aluno.idAluno.pontuacaoTotal} pontos`}
          />
        </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default RankingList;
