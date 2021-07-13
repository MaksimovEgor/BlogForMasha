import './App.css';
import {
    AppBar, BottomNavigation, BottomNavigationAction,
    Box,
    Button, Card, CardActions, CardContent, CardMedia,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    makeStyles,
    Paper, TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayersIcon from '@material-ui/icons/Layers';
import RestoreIcon from '@material-ui/icons/Restore';
import {useState} from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)

    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))




function App() {

    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };



    return (
        <>
            <div>
                <AppBar>
                    <Container>
                        <Toolbar>
                            <IconButton
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                className={classes.menuButton}/>
                            <MenuIcon/>
                            <Typography
                                className={classes.title}
                                variant='h6'>Блог Маши</Typography>
                            <Box mr={3}>
                                <Button variant='outlined' color='inherit' onClick={handleClickOpen} >Log in</Button>

                                <Dialog open={open} onClose={handleClose} aria-labelledby='from-dialog-title'>
                                    <DialogTitle id='from-dialog-title'>Log in</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>Log in to se videos</DialogContentText>
                                        <TextField
                                            autoFocus
                                            id='name'
                                            margin='dense'
                                            label='Email adress'
                                            type='email'
                                            fullWidth
                                        />
                                        <TextField
                                            autoFocus
                                            id='password'
                                            margin='dense'
                                            label='Password'
                                            type='password'
                                            fullWidth
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color='primary' >Close</Button>
                                        <Button onClick={handleClose} color='primary' >Log in</Button>
                                    </DialogActions>
                                </Dialog>

                            </Box>
                            <Button variant='contained' color='secondary'>Sign up</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>

                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component='h1'
                                        variant='h3'
                                        color='inherit'
                                        gutterBottom
                                    >
                                        Как выжить с заебой
                                    </Typography>
                                    <Typography
                                        variant='h5'
                                        color='inherit'
                                        paragraph
                                    >
                                        Сегодня я сделала брекеты и кушала салатик..............................
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                    >Узнать больше</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>

                <div className={classes.mainContent}>
                    <Container maxWidth='md'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Меня зовут
                            Маша</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Вот я хочу вам пожаловаться на него, вот послушайте меня... Он значит ест постоянно, а я
                            готовлю, а я палочки кукурузные люблю!
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>Поддержать</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='secondary'>Узнать больше</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.grid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image='https://source.unsplash.com/random'
                                            title='Image title'
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant='h5' gutterBottom>Instagram post</Typography>
                                            <Typography>
                                                Посмотрите фоточки мои в инстаграме
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size='small' color='primary'>Показать</Button>
                                            <Button size='small' color='primary'>Редактировать</Button>
                                        </CardActions>
                                        <LayersIcon />
                                        <PlayCircleFilledIcon />
                                    </Card>
                                </Grid>
                            )
                        )
                        }
                    </Grid>
                </Container>

            </main>

            <footer>
                <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                    label='Recents'
                    favorites='recents'
                    icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label='Favorites'
                        favorites='favorites'
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label='Nearby'
                        favorites='nearby'
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label='Folder'
                        favorites='folder'
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
                <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                    Еще подписывайтесь на меня в инстаграм, девочки!
                </Typography>
            </footer>

        </>
    )
}

export default App;
