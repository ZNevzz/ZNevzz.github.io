Using [conda environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
```bash
conda list env # list all environments
conda activate Scrapy # if Scrapy is listed OR
activate Scrapy # if conda activate is unavailable
conda create --name Scrapy # if Scrapy is NOT listed
pip install -r requirements.txt # install dependencies
conda list # all packages in env
```
