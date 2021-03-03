#########################################
    ##  IMPORT LOCAL SETTINGS ##
#########################################try:
    from .local_settings import *
except ImportError:
    pass


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'predictiondb',
        'USER': 'postgres',
        'PASSWORD': 'test123',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}