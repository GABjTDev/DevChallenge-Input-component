import Inputs from "./components/Inputs";

function App() {
  return (
    <>
      <div className="container">
        <div className="container__input">
          <Inputs 
            title='<Input />'
            type='normal'
          />
          <Inputs 
            title='&:hover'
            type='normal hover'
          />
          <Inputs 
            title='&:focus'
            type='normal blue'
          />
        </div>
        <div className="container__input">
          <Inputs 
            title='<Input error />'
            type='error'
          />
          <Inputs 
            title='&:hover'
            type='normal hover'
          />
          <Inputs 
            title='&:focus'
            type='normal error' 
          />
        </div>
        <div className="container__input">
          <Inputs 
            title='<Input disabled />'
            type='disabled'
            disabled={true}
          />
        </div>
        <div className="container__input mini">
          <Inputs 
            title='<Input helperText=”Some interesting text” />'
            type='normal'
            helperText='Some interesting text' 
          />
          <Inputs 
            title='<Input helperText=”Some interesting text” error />'
            type='error'
            helperText='Some interesting text'
          />
        </div>
        <div className="container__input mini">
          <Inputs 
            title='<Input startIcon />'
            type='normal'
            startIcon='phone'
            icons='icons iconStart'
          />
          <Inputs 
            title='<Input endIcon />'
            type='normal'
            endIcon='lock'
            icons='icons'
          />
        </div>
        <div className="container__input mini">
          <Inputs 
            title='<Input value=”text” />'
            type='normal'
            value='Text'
          />
        </div>
        <div className="container__input mini">
          <Inputs 
            title='<Input size=”sm” />'
            type='normal sm'
          />
          <Inputs 
            title='<Input size=”md” />'
            type='normal md'
          />
        </div>
        <div className="container__input">
          <Inputs 
            title='<Input fullWidth />'
            type='normal fullWidth'
            value="Text"
          />
        </div>
        <div className="container__input">
          <Inputs 
            title='<Input multiline row=”4” />'
            type='normal'
            row={10}
          />
        </div>
      </div>
      <footer>
        <p>Created by <a href="https://github.com/GABjTDev" target='_blank' rel="noreferrer">Gabriel Rea</a> - <a href="https://devchallenges.io/" target='_blank' rel="noreferrer">devChallenges.io</a></p>
      </footer>
    </>
  );
}

export default App;
