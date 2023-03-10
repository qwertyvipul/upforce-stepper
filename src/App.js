import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MyPage from './components/MyPage';

function App() {
    return (
        <div className="App">
            <Grid display="flex" justifyContent={'center'} container>
                <Grid item xl={8} md={10} xs={12}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper variant="outlined">
                            <MyPage />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
