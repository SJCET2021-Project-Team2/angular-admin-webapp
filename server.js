const express = require('express');

const app = express();

app.use(express.static('./dist/angular-admin-webapp'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/angular-admin-webapp' }
  );
});

app.listen(process.env.PORT || 3000);
