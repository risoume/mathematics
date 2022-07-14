---
categories: Visualisasi
layout: visualisasi

title: Mutually overlapping circles
title_page: Mutually overlapping circles
js: mutually-overlapping-circles_s
---

<main>
    <div class="content"> 
        <div class="subject">
            <h1>Mutually Overlapping Circles</h1>
            <a href="https://github.com/risoume/mathematics/blob/main/assets/js/mutually-overlapping-circles_s.js"><span>&lt;code></span></a>
            <p>Visualisasi lingkaran yang saling berpotongan.</p>
            <div class="user-area">
                <label>Warna: </label> <br>
                <input type="radio" name="type" id="pink-radio" checked/>
                <span style="background: rgb(245,22,99); color:transparent">---</span>
                <input type="radio" name="type" id="blue-radio" />
                <span style="background:rgb(61,145,224); color:transparent">---</span>
                <input type="radio" name="type" id="orange-radio" />
                <span style="background:rgb(248,111,21); color:transparent">---</span>
                <input type="radio" name="type" id="off-radio" /> Off<br>
                <label class="label-input">Banyak lingkaran:</label>
                <input id="input1" class="input-block" value="3" autofocus="autofocus">               
                <div class="btn-box">
                    <button class="green" id="solve">Draw</button>
                </div>               
            </div>
        </div> 
        <div class="math-show" style="padding: 0;">
            <div class="canvas-env">
                <canvas class="canvas-show" id="canvas1"></canvas>
            </div>
            <div class="layer-display">         
                    <label><b>Keterangan:</b></label>
                    <div id="board"></div>
            </div>
        </div>
    </div> 
</main>