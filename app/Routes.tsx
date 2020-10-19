/* eslint react/jsx-props-no-spreading: off */
import TextField from "@material-ui/core/TextField";
import React from 'react';
import App from './containers/App';


export default function Routes() {
  const [dir, setDir] = React.useState<string>("");
  return (
    <App>
      <TextField value={dir} onChange={e => setDir(e.target.value)} />
    </App>
  );
}
