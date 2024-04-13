import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function App() {
  return (
    <>

    <div className='homepage'>
      
      {/* left div */}
      <div className='left-div'>
        <div className='title-head'>
          <h1>facebook</h1>
          <h3>Facebook helps you connect and share with the people in your life.</h3>
        </div>
      </div>

      {/* right div */}
      <div className='right-div'>
      {/* Login card */}
      <div className='login-card'>

        <form>
          <div className='input-grp'>
            {/* 1st input */}
            <div className='input'>
              <TextField id="outlined-basic"  placeholder="Email address or phone number" variant="outlined" />
            </div>
  
            {/* 2nd input */}
            <div className='input'>
              <TextField id="outlined-basic"  placeholder="Password" variant="outlined" />
            </div>
          </div>

          <div className='btn-grp'>
            {/* button 1*/}
            <div className='btn-1'>
              <Button id='login-btn' variant="contained">Log in</Button>
            </div>
            {/* link */}
            <div className='link-1'>
              <Link href="#" underline='hover' fontSize={'13px'}>Forgotten password?</Link>
            </div>

            <hr />

          </div>
            
            {/* button 2 */}
            <div className='btn-2'>
              <Button id='create-btn' variant="contained">Create new account</Button>
            </div>
        </form>

      </div>

      <p><Link href="#" underline="hover" color={'black'} fontWeight={'bold'}>Create a Page </Link>for a celebrity, brand or business.</p>

      </div>

    </div>

    </>
  );
}

export default App;