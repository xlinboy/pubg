import json

from flask import Blueprint,request

from utils.DBUtil import DBUtilLocal, DBUtil

tojson = Blueprint('tojson',__name__)

# 这里返回所有站点信息
@tojson.route("/getArms",methods=['POST'])
def getArms():
    dBUtil = DBUtilLocal()
    weaponName = request.form.get('weaponName')
    datas = dBUtil.query("select * from weapon_info where weapon_name='%s'" %weaponName)
    if len(datas)==1:
        return str(json.dumps({'msg':True,'data':datas[0]}, check_circular=False,ensure_ascii=False))
    else:
        return str(json.dumps({'msg':False}, check_circular=False,ensure_ascii=False))

@tojson.route("/getHeadPointFirstCircle",methods=['POST'])
def getHeadPointFirstCircle():
    mapName = request.form.get('mapName')
    dBUtil = DBUtil()
    datas = dBUtil.query("select * from first_circle where map='%s'" % mapName)
    pointData = []
    for data in datas:
        pointData.append({'lat': data[1], 'lng': data[0], 'count': data[2]/10000+1, 'radius': data[2]/2000+2})
    return str(json.dumps(pointData, check_circular=False,ensure_ascii=False))

@tojson.route("/getHeadPointRedZone",methods=['POST'])
def getHeadPointRedZone():
    mapName = request.form.get('mapName')
    dBUtil = DBUtil()
    datas = dBUtil.query("select * from zk_redzone where map='%s'" % mapName)
    pointData = []
    for data in datas:
        pointData.append({'lat': data[1], 'lng': data[0], 'count': data[2]/10+1, 'radius': data[2]/10+4})
    return str(json.dumps(pointData, check_circular=False,ensure_ascii=False))


@tojson.route("/getHeadPointLastPoisonCircle",methods=['POST'])
def getHeadPointLastPoisonCircle():
    mapName = request.form.get('mapName')
    dBUtil = DBUtil()
    datas = dBUtil.query("select * from zc_lastpoisoncircle where map='%s' ORDER BY num desc limit 500" % mapName)
    pointData = []
    for data in datas:
        pointData.append({'lat': data[1], 'lng': data[0], 'count': data[2]+20, 'radius': data[2]+10})
    return str(json.dumps(pointData, check_circular=False,ensure_ascii=False))