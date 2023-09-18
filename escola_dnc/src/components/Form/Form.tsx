import { Button, Card, CardContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Forms } from "./styles";
import { useCallback, useState } from "react";
import { updateRanking } from "../../services/rankingServices";

function Form(atividades: any) {

    const [atividade, setAtividade] = useState("");
    const [email, setEmail] = useState("");
    const [nota, setNota] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChangeSelect = (event: any) => {
        setAtividade(event.target.value as string);
    };

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value as string);
    };

    const handleChangeNota = (event: any) => {
        setNota(event.target.value as string);
    };

    const sendForms = useCallback(async () => {
        setLoading(true);
        try {
          updateRanking({ email, nota, atividade });
        } catch (error) {
          console.error('Erro ao buscar atividades:', error);
          throw error;
        } finally {
            setLoading(false);
            location.reload();
        }
    }, [email, nota, atividade]);

  return (
    <Card>
        <CardContent>
        <Forms component={'form'}>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail do aluno"
                    variant="standard"
                    value={email}
                    onChange={(e) => handleChangeEmail(e)}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Nota"
                    type="number"
                    variant="standard"
                    value={nota}
                    onChange={(e) => handleChangeNota(e)}
                />
            </div>
            <div>
                <InputLabel id="demo-multiple-name-label">Tipo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={atividade}
                    label="Tipo"
                    onChange={handleChangeSelect}
                >
                    {atividades.atividades.map((atv, index) => (
                        <MenuItem key={index} value={atv._id}>{atv.tipo}</MenuItem>
                    ))}
                </Select>
            </div>
            <div>
                <Button onClick={sendForms} variant="contained">
                    {
                        !loading? 'Enviar' : 'Carregando...'
                    }
                </Button>
            </div>
        </Forms>
        </CardContent>
    </Card>
  );
}

export default Form;
