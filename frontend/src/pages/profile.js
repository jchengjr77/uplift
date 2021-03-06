import React, { useState, useEffect } from 'react';
import '../App.css';
import TopBar from '../components/topbar';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AddFriendModal from '../components/addfriendmodal';
import auth from '../fire';

const theme = createMuiTheme({
    shadows: ['none'],
});
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        borderColor: '#a46ddb !important',
        borderWidth: 1,
        borderStyle: 'solid',
        shadows: ['none'],
    },
    list: {
        borderColor: '#a46ddb !important',
        borderWidth: 1,
    },
}));

function Profile(props) {
    const [friendsList, setFriendsList] = useState([]);
    const classes = useStyles();
    const [profile, setProfile] = useState({ friends: [] });
    const [addFriend, setAddFriend] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (!props.isAuthed) {
            history.push('/');
        }
    });

    useEffect(() => {
        let mounted = true;
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    `/api/profile?uid=${auth.currentUser.uid}`
                );
                const res = await response.json();
                if (mounted) {
                    setProfile(res);
                    setFriendsList(Object.values(res.friends) || []);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchProfile();
        return () => (mounted = false);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className='PageContainer' theme={theme}>
                <TopBar to={props.to} isAuthed={props.isAuthed} />
                <div className='ProfileContainer'>
                    <div className='NameContainer'>name: {profile.name}</div>
                    <div className='EmailContainer'>email: {profile.email}</div>
                    <div className='FriendsText'>friends:</div>
                    <div className={classes.root}>
                        <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
                            <div className='FriendsContainer'>
                                <List className={classes.list}>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {friendsList.map((friend, idx) => {
                                        if (
                                            friend !== null &&
                                            friend !== undefined
                                        ) {
                                            return (
                                                <ListItem key={idx}>
                                                    <ListItemText
                                                        primary={friend}
                                                    />
                                                </ListItem>
                                            );
                                        }
                                    })}
                                </List>
                            </div>
                        </Paper>
                    </div>
                    <Link to='/messages' style={{ textDecoration: 'none' }}>
                        <div className='AMButtonContainer'>
                            <Button className='AllMessagesButton'>
                                all messages
                            </Button>
                        </div>
                    </Link>
                    <AddFriendModal
                        open={addFriend}
                        close={() => setAddFriend(false)}
                    />
                    <div className='AMButtonContainer'>
                        <Button
                            className='AllMessagesButton'
                            onClick={() => setAddFriend(true)}
                        >
                            add a friend
                        </Button>
                    </div>
                    <div className='LogoutButtonContainer'>
                        <Button
                            className='LogoutButton'
                            onClick={() => {
                                auth.signOut();
                                history.push('/');
                            }}
                        >
                            log out
                        </Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Profile;
