import app from './src/app.js';
import env from './src/config/env.js'

const port = env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})