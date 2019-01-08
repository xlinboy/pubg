import json

from flask import render_template, Blueprint

from utils.DBUtil import DBUtil, DBUtilLocal

maps = Blueprint('maps', __name__)
dataStatistics = Blueprint('dataStatistics', __name__)
arms = Blueprint('arms', __name__)


@maps.route('/')
def mapPage():
    return render_template('maps.html')


@arms.route('/')
def armsPage():
    dBUtil = DBUtilLocal()
    datas = dBUtil.query(
        'select * from weapon_info as wi inner join zc_weaponanalysis as wa on wi.weapon_name = wa.weaponName')
    armsTypes = dBUtil.query('select distinct weapon_type from weapon_info')
    dict_tmp = {}
    for data in datas:
        dict_tmp[data[0]] = data
    ammoData = str(json.dumps(dict_tmp, check_circular=False, ensure_ascii=False))
    return render_template('arms.html', datas=datas,
                           ammoData=ammoData,round = round,
                           armsTypes=armsTypes,armsTypesNum=len(armsTypes))

@dataStatistics.route('/')
def dataStatisticsPage():
    dBUtil = DBUtilLocal()
    datas = dBUtil.query(
        'select * from zc_killingchicken')
    return render_template('dataStatistics.html')