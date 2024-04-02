import os
import oracledb
from dotenv import load_dotenv

class OracleConfig:
    def __init__(self, username, password, hostname, port, sid):
        self.username = username
        self.password = password
        self.hostname = hostname
        self.port = port
        self.sid = sid
        self.oracle_home = os.environ.get('ORACLE_HOME')
        self.config_dir = "."
        self.init_oracle_client()
        self.makedsn()

    def init_oracle_client(self):
        oracledb.init_oracle_client(lib_dir=self.oracle_home, config_dir=self.config_dir)

    def makedsn(self):
        return oracledb.makedsn(self.hostname, self.port, sid=self.sid)
