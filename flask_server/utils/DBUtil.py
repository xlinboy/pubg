# -*- coding: UTF-8 -*-
import pymysql

address = 'localhost'


class DBUtil(object):
    def __init__(self):
        self.num = 0

    def query(self,sql):
        self.db = pymysql.connect(address,'root','19971116ch','pubg',charset='utf8')
        self.cursor = self.db.cursor()
        self.cursor.execute(sql)
        data = self.cursor.fetchall()
        self.cursor.close()
        self.db.close()
        return data
    def updata(self,sql):
        self.db = pymysql.connect(address,'root','19971116ch','pubg',charset='utf8')
        self.cursor = self.db.cursor()
        try:
            self.num=self.cursor.execute(sql)
            self.db.commit()
        except BaseException as base:
            print(base)
            self.db.rollback()
        finally:
            self.db.close()
            return self.num
class DBUtilLocal(object):
    def __init__(self):
        self.num = 0
    def query(self,sql):
        self.db = pymysql.connect(address,'root','19971116ch','pubg',charset='utf8')
        self.cursor = self.db.cursor()
        self.cursor.execute(sql)
        data = self.cursor.fetchall()
        self.cursor.close()
        self.db.close()
        return data
    def updata(self,sql):
        self.db = pymysql.connect(address,'root','19971116ch','pubg',charset='utf8')
        self.cursor = self.db.cursor()
        try:
            self.num=self.cursor.execute(sql)
            self.db.commit()
        except BaseException as base:
            print(base)
            self.db.rollback()
        finally:
            self.db.close()
            return self.num

dBUtil = DBUtil()
