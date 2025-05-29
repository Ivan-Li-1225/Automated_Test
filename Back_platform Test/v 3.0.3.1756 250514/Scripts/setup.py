# -*- coding:utf-8 -*-
import cx_Freeze
from cx_Freeze import setup, Executable
import sys
sys.setrecursionlimit(5000)
import openpyxl
from openpyxl import Workbook
import xlwt
import pytesseract
from PIL import Image

pyfile = "(Back_platform) 配置-代理商管理_搜尋幣別_20250410.py"
base = None # 一般程式

options = {
    'build_exe': {
        'packages':[],
        'include_files': []
        
    },
}

setup(
    name = "hello",
    options = options,
    version = "1.0",
    description = 'my first exe',
    executables = [Executable(pyfile, base=base, icon='python.ico')]
)