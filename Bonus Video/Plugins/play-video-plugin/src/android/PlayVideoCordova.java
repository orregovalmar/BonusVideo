package com.valmar.mediaplayer;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import android.content.Intent;
import android.util.Base64;
import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaResourceApi;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.Context;
import android.content.Intent;
import android.content.ComponentName;
import android.content.pm.PackageManager;
import android.content.pm.PackageInfo;
import java.util.Iterator;
import android.net.Uri;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import android.os.Environment;

/**
 * Created by DESARROLLO6 on 21/03/2016.
 */
public class PlayVideoCordova extends CordovaPlugin {

    private String absolutePath = "";
    
    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("play")) {
            boolean isTesting = false;
            boolean useToken = false;

            String target = data.getString(0);
            
            //Check current directory
            File f = new File(GetCurrentPath()); 
            //Get the external storage
            File extStore = Environment.getExternalStorageDirectory();
            String sdcardPath = extStore + "/" + target;
            //Alert("sdcardPath", sdcardPath);
            File fileOutput = new File(sdcardPath);
            
            if(!fileOutput.exists()){
                getAllFilse(f, target); 
                //Alert("absolutePath", absolutePath);
                File file = new File(absolutePath);
                copy(file, fileOutput);
            }
            
            if(fileOutput.exists()){
                //Alert("reproducir", sdcardPath);
                try {                               
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(sdcardPath));
                    intent.setDataAndType(Uri.parse(sdcardPath), "video/*");
                    this.cordova.getActivity().startActivity(intent);
                }
                catch (Exception ex){
                    Log.d("Mensaje", ex.getMessage());
                }
            }

        }
        return true;
    }
    
    public void Alert(String title, String message){
          //Alert
                new AlertDialog.Builder(this.cordova.getActivity())
                .setTitle(title)
                .setMessage(message)
                .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) { 
                        // continue with delete
                    }
                 })
                .setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) { 
                        // do nothing
                    }
                 })
                .setIcon(android.R.drawable.ic_dialog_alert)
                .show();
    }
    
    public String GetCurrentPath(){
        //Get Current Path
                PackageManager m = this.cordova.getActivity().getPackageManager();
                String s = this.cordova.getActivity().getPackageName();
                try {
                    PackageInfo p = m.getPackageInfo(s, 0);
                    s = p.applicationInfo.dataDir;
                } catch (PackageManager.NameNotFoundException e) {
                    Log.w("yourtag", "Error Package name not found", e);
                }
        return s;
    }
    
    public void getAllFilse(File curDir, String path) {		
        File[] filesList = curDir.listFiles();
        for(File f : filesList){
            if(f.isDirectory()){
                getAllFilse(f, path);
            }
            if(f.isFile()){                               
                if(f.getName().equals(path)){
                    absolutePath = f.getAbsoluteFile().getParent() + "/" + f.getName(); 
                }
            }
        }
    }
    
    
    public void copy(File src, File dst) {
        try {
            InputStream in = new FileInputStream(src);
            OutputStream out = new FileOutputStream(dst);

            // Transfer bytes from in to out
            byte[] buf = new byte[(int) src.length()];
            int len;
            while ((len = in.read(buf)) > 0) {
                out.write(buf, 0, len);
            }
            //Alert("copio", "0");
            in.close();
            out.close();
        }catch(Exception ex){
            //Alert("Mensaje", ex.getMessage());
            Log.d("Mensaje", ex.getMessage());
        }
	}
  }