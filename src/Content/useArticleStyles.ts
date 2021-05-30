import { makeStyles } from '@material-ui/core'

// the goal was to copy the original telegra.ph styling

// TODO: set line height, font size as default in typography object: https://material-ui.com/customization/default-theme/
export const useArticleStyles = makeStyles({
  root: {
    fontSize: '18px',
    lineHeight: '1.58',
    '& h1, h2, h3, h4, h5': {
      fontFamily: 'CustomSansSerif,"Lucida Grande",Arial,sans-serif;'
    },
    '& p': {
      margin: '0 21px 12px',
      wordWrap: 'break-word'
    },
    '& blockquote': {
      fontStyle: 'italic',
      margin: '18px 21px 16px 0',
      paddingLeft: '15px',
      wordWrap: 'break-word',
      borderLeft: '3px solid #000'
    },
    '& ol': {
      margin: '21px',
      padding: 0,
      listStyle: 'none',
      counterReset: 'list',
      '& li': {
        marginLeft: '30px',
        marginBottom: '14px',
        padding: 0,
        '&:before': {
          position: 'absolute',
          display: 'inline-block',
          boxSizing: 'border-box',
          width: '78px',
          margin: '0 0 0 -78px',
          textAlign: 'right',
          "-webkit-font-feature-settings": '"liga" on,"lnum" on',
          paddingRight: '12px',
          counterIncrement: 'list',
          content: 'counter(list) "."'
        }
      }
    },
    '& ul': {
      margin: '21px',
      padding: 0,
      listStyle: 'none',
      counterReset: 'list',
      '& li': {
        marginLeft: '30px',
        marginBottom: '14px',
        padding: 0,
        '&:before': {
          position: 'absolute',
          display: 'inline-block',
          boxSizing: 'border-box',
          width: '78px',
          margin: '0 0 0 -78px',
          textAlign: 'right',
          padding: '1px 15px 0 0',
          content: '"•"'
        }
      }
    },
    '& pre': {
      fontFamily: 'Menlo,"Courier New",Courier,monospace',
      fontSize: '16px',
      background: '#F5F8FC',
      margin: '14px 0',
      padding: '7px 21px',
      wordWrap: 'break-word'
    },
    '& code': {
      fontFamily: 'Menlo,"Courier New",Courier,monospace',
      fontSize: '16px',
      background: '#F5F8FC',
    },
    '& hr': {
      margin: '30px auto',
      width: '50%',
    }
  }
})