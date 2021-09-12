#!/usr/bin/env python
# coding: utf-8

# In[8]:


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


# In[15]:


model_top = keras.models.load_model(
    "C:/Users/asd36/PycharmProjects/fashion_forecast/server/deep_learning/model_top.h5")

img = image.load_img(
    '../public/uploads/IMG-7626-1631425637945.jpg', target_size=(400, 400, 3))
img = image.img_to_array(img)
img = img/255


# In[17]:


print(model_top.predict(img.reshape(1, 400, 400, 3))[0])


# In[1]:
