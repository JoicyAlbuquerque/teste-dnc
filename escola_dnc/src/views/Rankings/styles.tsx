import { Box, styled } from "@mui/material";

export const BoxWrapper = styled(Box)({
    display: 'flex',
    flexDirection:'column',
    gap: ' 1rem',
    minHeight: '100vh',
    padding: '1rem',
    backgroundColor: '#f1f1f1'
});

export const BoxEscolas = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
});