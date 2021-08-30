import moodle from './img/moodle.png'
import moodle2 from './img/moodle2.png'
import learning from './img/learning.png'

const getStyles = (palette) => {
  return {
    above: {
      padding: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',

      message: {
        fontSize: '3rem',
        width: '50%',
        color: '#666',
        marginRight: 50,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 30,
      },

      picture: {
        flex: 1,
        height: 500,
        width: '50%',
        backgroundImage: `url("${moodle}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    what: {
      textAlign: 'center',
      color: '#666',
      fontSize: '4rem',

      explanation: {
        color: 'white',
        fontSize: '2rem',
        padding: 80,
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: palette.primary.main,
      },
    },

    how: {
      textAlign: 'center',
      color: '#666',
      fontSize: '4rem',
      marginTop: 100,

      explanation: {
        fontSize: '2rem',
        padding: 80,
        paddingTop: 0,
        paddingBottom: 100,
      },

      picture: {
        width: '50%',
        backgroundSize: '100% 100%',
        backgroundImage: `url("${learning}")`,
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        paddingLeft: 20,
      },
    },

    help: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      inner: {
        padding: 50,
        width: '50%',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
      },

      picture: {
        width: '50%',
        height: 500,
        backgroundSize: 'contain',
        backgroundImage: `url("${moodle2}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },

    pricing: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      paddingBottom: 0,

      button: {
        height: 50,
        width: 100,
        marginBottom: 20,
        fontWeight: 'bold',
      },
    },
  }
}

export default getStyles
