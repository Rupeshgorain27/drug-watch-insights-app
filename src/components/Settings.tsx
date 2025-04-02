
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function Settings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    medicationReminders: true,
    weeklyReports: false,
    safetyAlerts: true
  });
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile settings updated successfully");
  };
  
  const handleNotificationUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Notification preferences updated successfully");
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-medical-dark mb-2">Settings</h3>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={profile.name} 
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={profile.email} 
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  value={profile.phone} 
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" className="bg-medical-primary hover:bg-medical-secondary">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNotificationUpdate}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  id="email-notifications" 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications" className="font-medium">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts on your device</p>
                </div>
                <Switch 
                  id="push-notifications" 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="medication-reminders" className="font-medium">Medication Reminders</Label>
                  <p className="text-sm text-muted-foreground">Get reminders to take your medications</p>
                </div>
                <Switch 
                  id="medication-reminders" 
                  checked={notifications.medicationReminders}
                  onCheckedChange={(checked) => setNotifications({...notifications, medicationReminders: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-reports" className="font-medium">Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly summary of your medication activities</p>
                </div>
                <Switch 
                  id="weekly-reports" 
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="safety-alerts" className="font-medium">Safety Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about important medication safety information</p>
                </div>
                <Switch 
                  id="safety-alerts" 
                  checked={notifications.safetyAlerts}
                  onCheckedChange={(checked) => setNotifications({...notifications, safetyAlerts: checked})}
                />
              </div>
            </div>
            
            <Button type="submit" className="mt-6 bg-medical-primary hover:bg-medical-secondary">
              Save Preferences
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            
            <Button 
              type="button" 
              className="bg-medical-primary hover:bg-medical-secondary"
              onClick={() => toast.success("Password updated successfully")}
            >
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-medical-severe">Danger Zone</CardTitle>
          <CardDescription>Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Delete Account</h4>
                <p className="text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
              </div>
              <Button 
                variant="destructive" 
                onClick={() => {
                  toast({
                    title: "Warning",
                    description: "Account deletion is disabled in this demo.",
                    variant: "destructive"
                  });
                }}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
