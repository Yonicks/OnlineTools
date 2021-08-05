import './app.scss';

import { Checkbox, FormControlLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { AppHeader, AppButton } from '@online-tools/ui';
import { Translates } from './common/translates';
import { useEffect, useState } from 'react';

export function App() {
  const [fieldText, setFieldText] = useState('');
  const [separateBy, setSeparateBy] = useState('\r\n');
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    console.log(`fieldText: ${fieldText}`);
  }, [fieldText]);

  const onSortClicked = (): void => {
    const sortedString = isReverse ? fieldText.split(/\r\n|\n\r|\n|\r/).sort().reverse().join('\r\n') :
      fieldText.split(/\r\n|\n\r|\n|\r/).sort().join('\r\n');
    setFieldText(sortedString);
  };


  return (
    <div className={'appMainArea'}>
      <AppHeader title={Translates.headerTitle} />
      <div className={'actionsArea'}>
        <AppButton text={Translates.sort} onClick={onSortClicked} />
        <FormControlLabel
          control={<Checkbox checked={isReverse} onChange={(e) => setIsReverse(e.target.checked)} name='checkedG' />}
          label={Translates.reverse}
        />
      </div>
      <div className={'textArea'}>
        <TextField
          id='outlined-multiline-static'
          label='Multiline'
          multiline
          rows={20}
          defaultValue='sgsdgsdg
qqqq
www
eee'
          variant='outlined'
          value={fieldText}
          onChange={(e) => setFieldText(e.target.value)}
        />
      </div>

    </div>
  );
}

export default App;
