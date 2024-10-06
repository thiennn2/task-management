## 
```bash
node -v
v18.18.1
yarn -v
1.22.19
```

1. install package with yarn
```bash
yarn install
```
2. Create a `db.json` file in your project root with the following content:
```bash
{
  "tasks": []
}
```
3. Start the json-server:
```bash
yarn mock-api
# default port 3000
# yarn mock-api --port <YOUR-PORT>
```
4. Copy file `.env.exampl` to `.env.local`
5. Start server dev
```bash
yarn dev
```