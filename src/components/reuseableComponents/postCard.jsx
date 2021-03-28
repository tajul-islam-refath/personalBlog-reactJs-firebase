
import { Link } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';



const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


function PostCard({ post, user }) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title={post.title}
                subheader={post.catagory}
            />
            <CardMedia
                className={classes.media}
                image={post.thumble ? post.thumble : ''}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Link style={{ color: 'black'}}  to={`/home/post/${post.id}`}>
                        {`${post.body.substr(0, 100)} more..`}
                    </Link>
                </Typography>
            </CardContent>

            {user.isLoggedIn ? (
                <>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>


                        {/* <IconButton>
                     <ShareIcon />
                 </IconButton> */}

                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="share"
                        >
                            <QuestionAnswerIcon />
                                      comments
                                 </IconButton>

                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                                    </Typography>
                        </CardContent>
                    </Collapse>
                </>
            ) : (
                <CardActions>
                    <Link to='/login' >
                       <Typography paragraph>LogIn for Like && comments</Typography>
                     </Link>
                </CardActions>
            )}

        </Card >
    );
}
export default PostCard;