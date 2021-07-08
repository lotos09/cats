import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme)=> ({
    infoPage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
    },

    breedInfoGallery: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: '50px',
        maxWidth: '100%'
    },
    imageContainer: {
        height: '30vh',
        maxWidth: '50%',
        flexGrow: 1,
        padding: 5,
        '@media (max-width: 800px)': {
            height: '40%',
        },

      '& > img': {
          maxHeight: '100%',
          minWidth: '100%',
          maxWidth: '50%',
          objectFit: 'cover',
          verticalAlign: 'bottom',
          borderRadius: 4,
          '@media (max-width: 500px)': {
              maxWidth: '90vw',
              height: '150px',

          },
      },
    },

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 900,
        '& > *': {
            textAlign: 'center',
            margin: theme.spacing(1),
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px',
        },
    },

}))