from ast import literal_eval
import glob2
import pandas as pd
import numpy as np
import json
import csv
import keras
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.layers import Conv2D, MaxPooling2D
from tensorflow.keras.utils import to_categorical
from keras.preprocessing import image
from sklearn.model_selection import train_test_split

model_top = keras.models.load_model(
    "C:/Users/asd36/PycharmProjects/fashion_forecast/server/deep_learning/model_top.h5")


def result(cate, img):
    img = image.load_img('../public/uploads/{}'.format(img),
                         target_size=(400, 400, 3))
    img = image.img_to_array(img)
    img = img/255
    return model_top.predict(img.reshape(1, 400, 400, 3))[0]


print(result("top", "IMG-7626-1631034123730.jpg"))
print(8)
