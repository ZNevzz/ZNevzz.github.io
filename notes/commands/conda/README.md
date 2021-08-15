Using [conda environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
```bash
conda env list # list all environments
conda activate Scrapy # if Scrapy is listed OR
activate Scrapy # if conda activate is unavailable
conda create --name Scrapy # if Scrapy is NOT listed
conda create --name Scraot python=3.9 # Specific Python version
pip install -r requirements.txt # install dependencies
conda list # all packages in env
```
