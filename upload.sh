npm run-script build
docker build -t ensena/app-frontend .
docker push  ensena/app-frontend
# kubectl set image deployment/app app=mmaecl/ensena-app  -n ensena 