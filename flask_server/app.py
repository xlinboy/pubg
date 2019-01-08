# encoding=utf-8
from flask import Flask, render_template, request
from controller.PageController import maps, dataStatistics, arms
from controller.tojsonController import tojson
from utils.DBUtil import DBUtilLocal

app = Flask(__name__)
app.register_blueprint(maps, url_prefix='/maps')
app.register_blueprint(dataStatistics, url_prefix='/dataStatistics')
app.register_blueprint(arms, url_prefix='/arms')
app.register_blueprint(tojson, url_prefix="/tojson")


@app.route('/')
def hello_world():
    dBUtil = DBUtilLocal()
    i = 1
    bestPlayerDatas = {}
    for data in dBUtil.query('select * from zcy_bestkda order by num desc '):
        bestPlayerDatas[i] = data
        i += 1
    i = 1
    bestHelperDatas = {}
    for data in dBUtil.query('select * from zcy_besthelper order by assist desc '):
        bestHelperDatas[i] = data
        i += 1
    return render_template('index.html', bestPlayerDatas=bestPlayerDatas, bestHelperDatas=bestHelperDatas,round = round)


@app.route('/eChartsDataPage', methods=['get'])
def eChartsDataPage():
    name = request.args.get('name')
    type = request.args.get('type')
    echartsType = True
    if request.args.get('echartsType')=='b':
        echartsType = False
    title = ''
    titlec = ''
    dBUtil = DBUtilLocal()
    barWidth = '20'
    title_y = ''
    title_x = ''
    sql=''
    if not echartsType:
        sql = ' order by checkRate desc limit 10'
    if (name == 'big'):
        title_x = '武器'
        title_y = '使用率'
        title = '远距离武器使用率'
        datas = dBUtil.query('select * from zk_bigdistance_argms')
    if (name == 'small'):
        title_x = '武器'
        title_y = '使用率'
        title = '近距离武器使用率'
        datas = dBUtil.query('select * from zk_smalldistance_armgs')
    if (name == 'most'):
        title_x = '武器'
        title_y = '使用率'
        title = '常用武器使用率'
        datas = dBUtil.query('select * from zk_most_arms')
    if (name == 'zck1'):
        title_x = '杀人数'
        title_y = '吃鸡率'
        title = '单排吃鸡率与杀人数关系'
        datas = dBUtil.query('select * from zc_killingchicken where partySize=1'+sql)
    if (name == 'zck2'):
        title_x = '杀人数'
        title_y = '吃鸡率'
        title = '双排吃鸡率与杀人数关系'
        datas = dBUtil.query('select * from zc_killingchicken where partySize=2'+sql)
    if (name == 'zck4'):
        title_x = '杀人数'
        title_y = '吃鸡率'
        title = '四排吃鸡率与杀人数关系'
        datas = dBUtil.query('select * from zc_killingchicken where partySize=4'+sql)
    if (name == 'zkfpp'):
        title = '杀人数与吃鸡的关系'
        title_x = '杀人数'
        title_y = '吃鸡数'
        datas = dBUtil.query('select * from zk_firstpeople where kill_people<=30 order by kill_people asc ')
    list_str = ["[", "["]
    bData = '['
    # if echartsType:
    for data in datas:
        list_str[0] += "'" + str(data[0]) + "',"
        list_str[1] += "" + str(data[1]) + ","
    list_str[0] += "]"
    list_str[1] += "]"
    # else:
    for data in datas:
        bData += "{value: %s, name: '%s'}," %(data[1],data[0])
    bData += ']'

    return render_template('eChartsDataPage.html', list_str=list_str, title=title, titlec=titlec, barWidth=barWidth,
                           title_y=title_y, title_x=title_x,type=type,echartsType=echartsType,bData=bData)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
